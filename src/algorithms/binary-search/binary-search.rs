use std::cmp::Ordering::*;

fn binary_search<T: Ord>(arr: &[T], elem: &T) -> Option<usize>
{
    let mut size = arr.len();
    let mut base = 0;

    while size > 0 {
        size /= 2;
        let mid = base + size;
        base = match arr[mid].cmp(elem) {
            Less    => mid,
            Greater => base,
            Equal   => return Some(mid)
        };
    }

    None
}

fn main() {
	let numbers = [ 2, 3, 4, 10, 40 ];
	let x = 10_i32;
    println!("{:?}",binary_search(&numbers, &x));
}
