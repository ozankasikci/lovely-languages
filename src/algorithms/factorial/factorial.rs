fn factorial_recursive (n: u64) -> u64 {
    match n {
        0 => 1,
        _ => n * factorial_recursive(n-1)
    }
}

fn factorial_iterative(n: u64) -> u64 {
    (1..n+1).fold(1, |p, n| p*n)
}

fn main () {
    for i in 1..1000 {
        println!("{}", factorial_recursive(i))
    }
    for i in 1..1000 {
        println!("{}", factorial_iterative(i))
    }
}
