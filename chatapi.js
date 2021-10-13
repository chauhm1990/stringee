<script>
import { StringeeClient, StringeeChat } from "stringee-chat-js-sdk";
var StringeeClient = new stringeclient();
stringeeClient.connect('sdgbgergerhgerigerherherh');
stringeeClient.on('connect', function () {
    console.log('++++++++++++++ connected to StringeeServer')
  });

  stringeeClient.on('authen', function (res) {
    console.log('authen', res)
  });

  stringeeClient.on('disconnect', function () {
    console.log('++++++++++++++ disconnected')
  });
</script>
