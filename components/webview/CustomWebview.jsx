import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import WebView from "react-native-webview";
import { UserDataContext } from "../../context/UserDataContext";

const CustomWebview = ({ setWebViewVisible }) => {
  const { userData } = useContext(UserDataContext);

  const navigation = useNavigation();

  const handleWebViewMessage = (event) => {
    const message = event.nativeEvent.data;
    if (message === "goHome") {
      setWebViewVisible(false);
      navigation.navigate("Home");
    }
  };

  const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              height: 100vh;
              margin: 0;
              font-family: Athletics;
              background-color: #000
            }
            .button {
              margin-top: 20px;
              padding: 25px 50px;
              background-color: #000;
              color: white;
              border: 2px solid #fff;
              border-radius: 20px;
              cursor: pointer;
              font-size: 40px;
            }
            .text{
              font-size: 50px;
              color: #fff;
              text-align: center;
            }
          </style>
        </head>
        <body>
          <p class='text'>This is a webview, launched by <span style="color: #FFBA07">${
            userData?.firstName ?? ""
          }</span>. They are <span style="color: #ED6CEF">${
    userData?.age ?? ""
  }</span> yrs old.</p>
          <button class="button" onclick="sendMessage()">Back to Home</button>
          <script>
            function sendMessage() {
              window.ReactNativeWebView.postMessage("goHome");
            }
          </script>
        </body>
      </html>
    `;

  return (
    <WebView
      source={{ html: htmlContent }}
      style={{ flex: 1 }}
      onMessage={handleWebViewMessage}
    />
  );
};

export default CustomWebview;
