## Motivation

In comparison to Discrete logarithm (DL) algorithms such as Diffie Hellman or Elgamal, it's much cheaper to use Elliptic Curves (EC) rather than DH in terms of space and computations.

- To achieve a security level of 128 bits, we need 3072 bits using DL, while we only need 256 bits using EC.
- To achieve a security level of 192 bits, we need 7680 bits using DL, while we only need 384 bits using EC.
- To achieve a security level of 256 bits, we need 15360 bits using DL, while we only need 512 bits using EC.


## Elliptic curve

Defination:    $Y^2$ = $X^3$ + $aX$ + b ,

where $4a^3$ + $27b^2$ $\ne$ 0 , if this equation is not fullfiled, then this is not an Elliptic curve you wanna use in cryptography 

### Point addition
To add two point P and Q on the curve E, we have 3 cases


1. where P $\ne$ Q ,

* For any two points P, Q on the curve E, a line draw between P and Q will intersect the curve E on a third point R.

    __P + Q = -R__

    The geometric interpretation would be that the point addition of P and Q is equal to the inverse of the point R


2. where P = Q (double the point),

    __P + P = 2P__

    To compute 2P, we draw the tangent to the point P, this tangent will intersct with the curve E on another point R. The inverse of that point R is 2P.

3. where P = -P,

    * In that case, the line drawn between P and -P is a vertical line that does not intersect the curve E at any other point.

    In this case, we kinda of cheat. we define an artificial point __point at infinity__ (O).

    __P + -P = O__


#### Mathematically speaking

E: $Y^2$ = $X^3$ + $aX$ + b

P = ($x_1$, $y_1$) ,  Q = ($x_2$, $y_2$)  , R = P + Q , where P, Q, R points on E

__if P = -Q , then  R = O. Otherwise__


firstly we need to compute S

* if P $\ne$ Q , then S =  ($y_2$ - $y_1$) / ($x_2$ - $x_1$)

* if P = Q , then S =  (3$x_1^2$ - $y_1$) / (2$y_1$)

$x_R$ = $S^2$ - $x_1$ - $x_2$

$y_R$ = - $y_1$ - S($x_R$ - $x_1$)
