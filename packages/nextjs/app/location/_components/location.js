"use client";

export const YourLocation = () => {

    function geoCurrentLocation() {
        const status = document.querySelector("#status");
        const mapLink = document.querySelector("#map-link");
      
        mapLink.href = "";
        mapLink.textContent = "";
      
        function success(position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
      
          status.textContent = "";
          mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
          mapLink.textContent = `緯度: ${latitude}°、経度: ${longitude}°`;
        }
      
        function error() {
          status.textContent = "Unable to retrieve your location";
        }
      
        if (!navigator.geolocation) {
          status.textContent = "このブラウザーは位置情報に対応していません";
        } else {
          status.textContent = "位置情報を取得中…";
          navigator.geolocation.getCurrentPosition(success, error);
        }
      }
      
      document.querySelector("#current-location");
      addEventListener("click", geoCurrentLocation);

        try {
          const options = {
            get passive() {
              // この関数はブラウザーが passive プロパティに
              // アクセスしようとしたときに呼び出されます。
              passiveSupported = true;
              return false;
            },
          };

          window.addEventListener("click", null, options);
          window.removeEventListener("click", null, options);
        } catch (err) {
          passiveSupported = false;
        }

      // const options = {
      //   enableHighAccuracy: true,
      //   maximumAge: 30000,
      //   //timeout: 27000,
      //  };
      
    //   const watchID = navigator.geolocation.watchPosition(success, error, options);

  return (
    <>
      <div className="bg-base-300 p-6 rounded-lg max-w-md mx-auto mt-6">
        <button id="current-location" className="btn btn-primary bg-top p-6 rounded-3xl max-w-md mx-auto ml-3 border-white">現在の位置を表示</button><br />
        <p id="status"></p>
        <a id="map-link" target="_blank"></a>
      </div>
    </>
  );
};

export default YourLocation;
