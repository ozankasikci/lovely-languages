let rec factorial n =
    if n <= 1 then
      1
    else
      factorial (n-1) * n;;

let () =
  for n = 0 to 16 do
    Printf.printf "%d! = %d\n" n (factorial n)
  done;