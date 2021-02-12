import ones from "./_ones";

function toggle(X: bigint, x: bigint, i: bigint, V: bigint=1n): bigint {
  return x ^ (ones(V) << i);
}
export default toggle;
