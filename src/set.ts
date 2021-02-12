import ones from "./_ones";

function set(X: bigint, x: bigint, i: bigint, V: bigint=1n, v: bigint=ones(V)): bigint {
  return (x & ~(ones(V) << i)) | (v << i);
}
export default set;
