window.addEventListener('DOMContentLoaded', () => {
  const preload = document.createElement("script");
  preload.innerHTML += `window.iochatHost = '${process.env.IOCHAT_HOST || "localhost:9000"}';`;
  preload.innerHTML += `window.iochatProtocol = '${process.env.IOCHAT_PROTOCOL || "http:"}';`;
  document.body.append(preload);
})