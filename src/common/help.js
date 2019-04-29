export const IsPC = () => {
  const userAgentInfo = navigator.userAgent;

  if (/(iPhone|iPad|iPod|iOS|Android|BlackBerry)/i.test(userAgentInfo)) {
    return false;
  }
  return true;
}