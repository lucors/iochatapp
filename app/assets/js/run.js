//-------------------------------------------------------------------------------------------------------
// DOCUMENT READY EVENT
//-------------------------------------------------------------------------------------------------------
$(document).ready(function () {
  host = window.iochatHost;
  protocol = window.iochatProtocol;
  mobilePrepare();
  setStage("auth");
});