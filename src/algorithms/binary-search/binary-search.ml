let rec binary_search a value low high =
  if high = low then
    if a.(low) = value then
      low
    else
      raise Not_found
  else let mid = (low + high) / 2 in
    if a.(mid) > value then
      binary_search a value low (mid - 1)
    else if a.(mid) < value then
      binary_search a value (mid + 1) high
    else
      mid
Output:

# let arr = [|1; 3; 4; 5; 6; 7; 8; 9; 10|];;
val arr : int array = [|1; 3; 4; 5; 6; 7; 8; 9; 10|]
# binary_search arr 6 0 (Array.length arr - 1);;
- : int = 4
# binary_search arr 2 0 (Array.length arr - 1);;
Exception: Not_found.
