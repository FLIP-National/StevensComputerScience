(* 

  Name: Cindy Zhang
  Pledge: I pledge my honor that I have abided by the Stevens Honor System.

*)

type 'a gt = Node of 'a*('a gt) list

let mk_leaf (n:'a) : 'a gt =
  Node(n,[])
    
let t : int gt =
 Node (33,
       [Node (12,[]);
        Node (77, 
              [Node (37, 
                     [Node (14, [])]); 
               Node (48, []); 
               Node (103, [])])
       ])

let rec please f l = 
  match l with 
  | [] -> []
  | h::t -> f h @ please f t

let rec list_branches t = 
  match t with 
  | Node(h, leaves) -> 
    Node(h, []) :: 
    (fun l -> 
      match l with 
      | [] -> []
      | h::t -> list_branches h @ please list_branches t
    ) leaves


let rec level_helper n t = 
  match t with 
  | Node(h, leaves) -> 
    n :: 
    (fun l -> 
      match l with 
      | [] -> []
      | h::t -> level_helper (n+1) h @ please (level_helper 0) t
    ) leaves

let lvl t =
  level_helper (-1) t 

let rec gt_iterator t = 
  match t with 
  | Node(h, leaves) -> 
    h :: 
    (fun l -> 
      match l with 
      | [] -> []
      | h::t -> gt_iterator h @ please gt_iterator t
    ) leaves

let rec max l n = 
  match l with
  | [] -> n
  | h::t -> 
    if h>n
    then max t h
    else max t n

let rec height t =
  match t with 
  | Node(d, []) -> 1
  | Node(d, leaves) -> 1 + max (List.map height leaves) 0
    
let rec size t =
  List.length (list_branches t)

let rec relist l n = 
  if l=n
  then []
  else n :: (relist l (n+1))

let rec pths t =
  match t with 
  | Node(h, []) -> []
  | Node(h, ch) -> 
      [(relist (List.length ch) 0)] @ (List.flatten (List.map pths ch))

let rec paths_to_leaves t = 
  match t with 
  | Node(d, []) -> [[]]
  | Node(d, leaves) ->
    List.flatten 
      (List.mapi 
        (fun i x -> (List.map (fun y -> i :: y) x)) 
        (List.map paths_to_leaves leaves))

let rec is_perfecth l =
  match l with 
  | [] -> true
  | h::h2::t -> 
    if (List.length h) = (List.length h2)
    then is_perfecth t
    else false       

let rec is_perfect t =
  if (height t) = 1
  then true
  else is_perfecth (paths_to_leaves t)

let rec preorder (Node(d,ch)) =
  match Node(d, ch) with 
  | Node(d, []) -> [d]
  | Node(d, ch) -> d :: List.flatten(List.map preorder ch)

                        
let rec mirror (Node(d,ch)) =
  match Node(d, ch) with
  | Node(d, []) -> Node(d, [])
  | Node(d, ch) -> Node(d, List.map mirror (List.rev ch))

  
let rec mapt f (Node(d,ch)) =
  Node(f d, List.map (mapt f) ch)

let rec foldt : ('a -> 'b list -> 'b) -> 'a gt -> 'b =
  fun f (Node(d,ch)) ->
    f d (List.map (foldt f) ch)

let sumt t =
  foldt (fun i rs -> i + List.fold_left (fun i j -> i+j) 0 rs) t

let memt t e = 
  foldt (fun i rs -> i=e || List.exists (fun i -> i) rs) t

let mirror' t  = 
  foldt (fun i x -> Node(i, List.rev x)) t