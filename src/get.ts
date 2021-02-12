import ones from "./_ones";

function get(X: bigint, x: bigint, i: bigint, V: bigint=1n): bigint {
  return (x >> i) & ones(V);
}
export default get;
