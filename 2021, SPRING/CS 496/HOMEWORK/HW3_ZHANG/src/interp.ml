(* 
    Name: Cindy Zhang
    Date: 03/26/2021
    File: interp.ml
    Description: 
*)

open Ast
open Ds
 
let rec apply_proc : exp_val -> exp_val -> exp_val ea_result =
  fun f a ->
  match f with
  | ProcVal (id,body,env) ->
    return env >>+
    extend_env id a >>+
    eval_expr body
  | _ -> error "apply_proc: Not a procVal"
and
 eval_expr : expr -> exp_val ea_result = fun e ->
  match e with
  | Int(n) ->
    return @@ NumVal n
  | Var(id) ->
    apply_env id
  | Add(e1,e2) ->
    eval_expr e1 >>=
    int_of_numVal >>= fun n1 ->
    eval_expr e2 >>=
    int_of_numVal >>= fun n2 ->
    return @@ NumVal (n1+n2)
  | Sub(e1,e2) ->
    eval_expr e1 >>=
    int_of_numVal >>= fun n1 ->
    eval_expr e2 >>=
    int_of_numVal >>= fun n2 ->
    return @@ NumVal (n1-n2)
  | Mul(e1,e2) ->
    eval_expr e1 >>=
    int_of_numVal >>= fun n1 ->
    eval_expr e2 >>=
    int_of_numVal >>= fun n2 ->
    return @@ NumVal (n1*n2)
  | Div(e1,e2) ->
    eval_expr e1 >>=
    int_of_numVal >>= fun n1 ->
    eval_expr e2 >>=
    int_of_numVal >>= fun n2 ->
    if n2==0
    then error "Division by zero"
    else return @@ NumVal (n1/n2)
  | Let(id,def,body) ->
    eval_expr def >>= 
    extend_env id >>+
    eval_expr body 
  | ITE(e1,e2,e3) ->
    eval_expr e1 >>=
    bool_of_boolVal >>= fun b ->
    if b 
    then eval_expr e2
    else eval_expr e3
  | IsZero(e) ->
    eval_expr e >>=
    int_of_numVal >>= fun n ->
    return @@ BoolVal (n = 0)
  | Proc(id,e)  ->
    lookup_env >>= fun en ->
    return (ProcVal(id,e,en))
  | App(e1,e2)  -> 
    eval_expr e1 >>= fun v1 ->
    eval_expr e2 >>= fun v2 ->
    apply_proc v1 v2 
  | Abs(e1) ->
    eval_expr e1 >>= 
    int_of_numVal >>= fun n ->
    return (NumVal (abs n))
  | Cons(e1, e2) ->
    eval_expr e1 >>= fun n ->
    eval_expr e2 >>=
    list_of_listVal >>= fun m ->
    return (ListVal (n:: m))
  | Hd(e1) ->
    eval_expr e1 >>=  
    list_of_listVal >>= fun n ->
    if (n=[])
    then error "List is empty!"
    else return (List.hd n)
  | Tl(e1) ->
    eval_expr e1 >>=  
    list_of_listVal >>= fun n ->
    if (n=[])
    then error "List is empty!"
    else return (ListVal (List.tl n))
  | Empty(e1) ->
    eval_expr e1 >>= fun n ->
    if (is_listVal n)
    then return (BoolVal (n = (ListVal [])))
    else return (BoolVal (n = (TreeVal Empty)))
  | EmptyList ->
    return (ListVal [])
  | EmptyTree ->
    return (TreeVal Empty)
  | Node(e1,lte,rte) ->
    eval_expr e1 >>= fun x ->
    eval_expr lte >>= 
    tree_of_treeVal >>= fun left ->
    eval_expr rte >>= 
    tree_of_treeVal >>= fun right ->
    return (TreeVal (Node (x, left, right)))
  | CaseT(target,emptycase,id1,id2,id3,nodecase) ->
    eval_expr target >>= fun x ->
    if (x = (TreeVal Empty))
    then eval_expr emptycase >>= fun n -> return n
    else 
      match x with
      | TreeVal Node(a,b,c) ->
      (extend_env id1 a) >>+
      (extend_env id2 (TreeVal b)) >>+
      (extend_env id3 (TreeVal c)) >>+
      eval_expr nodecase >>= fun node ->
      return node
and
  eval_prog (AProg e) = eval_expr e

(***********************************************************************)
(* Everything above this is essentially the same as we saw in lecture. *)
(***********************************************************************)

(* Parse a string into an ast *)

let parse s =
  let lexbuf = Lexing.from_string s in
  let ast = Parser.prog Lexer.read lexbuf in
  ast

let lexer s =
  let lexbuf = Lexing.from_string s
  in Lexer.read lexbuf 

(* Interpret an expression *)
let interp (e:string) : exp_val result =
  let c = e |> parse |> eval_prog
  in run c