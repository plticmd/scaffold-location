"use client";

export const YourAltitude = () => {

    function geoCurrentLocation() {
        const status = document.querySelector("#status");
        const mapLink = document.querySelector("#map-link");
      
        mapLink.href = "";
        mapLink.textContent = "";
      
        function success(position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          const altitude = position.coords.altitude;
          const heading = position.coords.heading;
          const speed = position.coords.speed;
      
          status.textContent = "";
          mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}/${altitude}/${heading}/${speed}`;
          mapLink.textContent = `緯度: ${latitude}°、経度: ${longitude}°、標高: ${altitude} m、方向: ${heading}°、速度: ${speed} m/s`;
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

  return (
    <>
      <div className="bg-base-300 p-6 rounded-lg max-w-md mx-auto mt-6">
        <button id="current-altitude" className="btn btn-primary bg-top p-6 rounded-3xl max-w-md mx-auto ml-3 border-white">現在の標高を表示</button><br />
        <p id="status"></p>
        <a id="map-link" target="_blank"></a>
      </div>
    </>
  );
};

export default YourAltitude;