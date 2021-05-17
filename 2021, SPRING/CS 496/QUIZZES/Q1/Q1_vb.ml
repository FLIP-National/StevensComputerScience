


(* Sample Tree *)

let ex = [(12, 7); (12, 43); (7, 4); (43, 33); (43,77)]


(*
      12
      /\ 
     /  \  
    7   43
   /    /\ 
  /    /  \  
 4    33  77
*)
         
(* 
Eg. outgoing_nodes ex 12 => [7; 43]
*)
let rec outgoing_nodes g n =
  failwith "implement me"


(* 
   The list of nodes of the tree without duplicates. The order of the
   nodes in the list is irrelevant.
   eg. nodes ex => [12; 7; 4; 33; 43; 77]

*)


let rec nodes' g =
  failwith "implement me"

(* 
   Returns the leaves of a tree
   Eg. leaves ex =>  [4; 33; 77]
*)
let rec leaves g  =
  failwith "implement me"
 
(* Reachable nodes from a source node. (Extra-credit)
   Eg. reachale ex 12 =>  [12; 7; 4; 33; 43; 77]
   *)

let rec reachable g n =
  failwith "implement me"
                               

