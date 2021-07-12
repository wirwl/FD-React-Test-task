export const qeCalc = (a:number, b:number, c:number) => {
    if (a===0) return [];
    const D = b**2 - 4*a*c;
    if (D<0) return [];
    if (D===0) return [-b/(2*a)];
    return [(-b-Math.sqrt(D))/(2*a), (-b+Math.sqrt(D))/(2*a)];
}