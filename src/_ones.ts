function ones(V: bigint=0n): bigint {
  return (1n << V) - 1n;
}
export default ones;
