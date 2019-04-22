(defn factorial-iterative [x]
  (apply * (range 2 (inc x))))

(defn factorial-recursive [x]
  (if (< x 2)
      1
      (* x (factorial-recursive (dec x)))))

(println (factorial-recursive 10)) 
