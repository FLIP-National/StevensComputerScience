(* -----------------------------------------------------------------------
Name: Cindy Zhang
Date: 02/21/2021
Assignment: One
Pledge: "I pledge my honor that I have abided by the Stevens Honor System."
--------------------------------------------------------------------------*)

(* Useful Functions *)

let rec map f l = 
  match l with 
  | [] -> []
  | h::t -> f h :: map f t

let rec foldl f a l = 
  match l with 
  | [] -> a
  | h::t -> foldl f (f a h) t

(* 2.0 Assignemnt Introduction *)

(*------------------------------
    Encoding    Instruction
      0           Pen down
      1           Pen up
      2           Move North
      3           Move East
      4           Move South
      5           Move West
------------------------------*)

(* 2.1 Encoding Mini-Logo Programs *)

type program = int list

let square : program = [0;2;2;3;3;4;4;5;5;1]
let letter_e : program = [0;2;2;3;3;5;5;4;3;5;4;3;3;5;5;1]

(* 2.2 Exercises *)

(* 2.2.1 Mirror Image:

        Implement a function that returns a program
        that draws the mirror images of the input 
        program.                                      *)

let mirror_image_helper (n:int) = 
  match n with 
  | 2 -> 4
  | 3 -> 5
  | 4 -> 2
  | 5 -> 3
  | _ -> n

let mirror_image (p:program) = 
  map mirror_image_helper p 

(* 2.2.2 Rotate 90 Letter:
        
        Implement a function that given a program 
        returns a new one which draws the same 
        picture except that they are rotated 90 
        degrees.                                     *)

let rotate_helper (n:int) = 
  match n with 
  | 2 -> 3
  | 3 -> 4
  | 4 -> 5
  | 5 -> 2
  | _ -> n

let rotate_90_letter (p:program) =
  map rotate_helper p

(* 2.2.3 Rotate 90 Word
      
        Implement a function that given a list of 
        programs that represent letters returns a new 
        list in which each program draws the same 
        pictures except that they are rotated 90 degrees.  *)

let rotate_90_word (l:program list) =
  map rotate_90_letter l 

(* 2.2.4 Repeat:
        
        Implement a function such that 
        repeat n x returns a list with n copies of x. *)

let rec repeat (n:int) (x:'a) = 
  match n with
  | 0 -> []
  | _ -> x :: (repeat (n-1) x)

(* 2.2.5 Pantograph: 

        Implement a function such that pantograph n p 
        returns a program that draws the same things 
        as p only enlarged by n-folds.               *)

let pantorepeat (n:int) (x:int) = 
  if n = 0
  then []
  else match x with 
  | 0 -> [0]
  | 1 -> [1]
  | 2 | 3 | 4 | 5 -> (repeat n x)
  | _ -> []

let rec appendl (l:'a list) = 
  match l with 
  | [] -> []
  | h::t -> h @ appendl t

let pantograph (n:int) (p:program) = 
  appendl @@ map (pantorepeat n) p

(* 2.2.6 Coverage:
        
        Implement a function that compresses a 
        program by replacing adjacent copies of 
        the same instruction with a tuple (m,n) 
        where m is the instruction and n is the 
        number of consecutive times it should be 
        exceuted.                                    *)


let rec coverage' x p = 
  match p with
  | [] -> []
  | h::t ->  
    if h=2 then (fst x, (snd x) + 1) :: coverage' (fst x, (snd x) + 1) t 
    else 
      if h=3 then ((fst x) + 1, snd x) :: coverage' ((fst x) + 1, snd x)  t
    else 
      if h=4 then (fst x, (snd x) - 1) :: coverage' (fst x, (snd x) - 1) t
    else 
      if h=5 then ((fst x) - 1, snd x) :: coverage' ((fst x) - 1, snd x) t
    else x :: coverage' x t

let coverage x p = 
  x :: coverage' x p

(* 2.2.7 Compress: 
        
        Implement a function that compressses a program 
        by replacing adjacent copies of the same 
        instruction with a tuple (m,n) where m is the 
        instruction and n is the number of consecutive 
        times it should be executed.                      *)

let rec compress' p counter = 
  match p with 
  | [] -> []
  | h::[] -> (h,1) :: []
  | h::h2::t -> 
    if h!=h2
    then (h, counter) :: (compress' (h2::t) 1)
    else compress' (h2::t) (counter+1)  

let compress p = 
  compress' p 1

(* 2.2.8 Uncompress:
        
        Implement a function that decompresses a 
        compressed program.                     *)

let rec uncompress' p = 
  match p with 
  | [] -> []
  | (src, tgt)::t -> (repeat tgt src) :: uncompress' t

let uncompress p = 
  appendl (uncompress' p)

(* 2.2.9 Optimize: 

        Implement a function that optimizes a 
        program by eliminating redundant pen up
        and pen down instructions.            *)
        
let rec optimize' p is_pen_up = 
  match p with 
  | [] -> []
  | h::t -> 
    if is_pen_up && h=1
    then optimize' t true
    else 
      if is_pen_up && h=0
      then h :: optimize' t false
    else
      if is_pen_up=false && h=1
      then h :: optimize' t true
    else 
      if is_pen_up=false && h=0
      then optimize' t false
    else
      h :: (optimize' t is_pen_up)

let optimize (p:program) = 
  optimize' p true