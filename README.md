# WifiManager
## Mô tả
Một ứng dụng dành desktop được sử dụng để kết nối với mạng Wi-Fi và xem các mạng Wi-Fi đã kết nối trước đó (chia sẻ mật khẩu qua mã QR). Đây là một phần mềm mã nguồn mở thuộc dự án mã nguồn mở ODZ (Opensource Dev Zone).


![wi-fi_logo_100px](https://github.com/tdphatstudy/ODZ_WifiManager/assets/124871402/f12458e7-cce8-4762-81e0-9c5d284a6215)

## Hệ điều hành hỗ trợ
| Hệ Điều Hành | Windows    | Linux   | MacOS|
| :---:   | :---: | :---: | :---: |
| Hỗ trợ | ✔️  | ❌   |  ❌ |

## Nền tảng phát triển
Việc phát triển hoặc build với các phiên bản khác có thể gây ra lỗi.
Chúng tôi phát triển phần mềm dựa trên các thư viện, ngôn ngữ với phiên bản sau đây:
  - NODEJS : v18.13.0.
  - ELECTRON: 24.2.0.
  - NODE-WIFI: 2.0.16.
  - QRCODE: 1.5.3.
  - HTML5.
  - CSS3.
  - JS ES6.<br />


## Các tính năng
  - [x] Hiển thị danh sách các wifi mà hệ thống quét được.
  - [x] Hiển thị danh sách wifi đã từng kết nối.
  - [x] Xem thông tin các wifi hiện hành (SSID, Tín hiệu, loại bảo mật, nơi nhập password).
  - [x] Kết nối wifi.
  - [x] Xem thông tin các wifi đã kết nối (SSID, loại bảo mật, mật khẩu, QR Code).
  - [ ] Hiện wifi đang kết nối.
  - [ ] Ngưng kết nối wifi.
  - [ ] Quét QR để kết nối wifi.

##  Cài đặt
### Cài đặt bằng zip.
  - Bước 1: Nhấn **Code** -->  **Download ZIP**
 ![image](https://github.com/tdphatstudy/ODZ_WifiManager/assets/124871402/afd1b8d6-4b20-452a-8dc7-10629f703ac9)

  - Bước 2: Giải nén ZIP. Hướng dẫn: https://support.microsoft.com/en-us/windows/zip-and-unzip-files-f6dde0a7-0fec-8294-e1d3-703ed85e7ebc
  - Bước 3: Mở project mới giải nén.
 ![image](https://github.com/tdphatstudy/ODZ_WifiManager/assets/124871402/ca685998-c0af-476b-9edd-742ec02a59cc)

  - Bước 4: Cài đặt các dependency.
  `npm install`
  - Bước 5: Chạy dự án.
  `npm start`
## Hướng dẫn sử dụng.
### Giao diện sử dụng
![image](https://github.com/tdphatstudy/ODZ_WifiManager/assets/124871402/5959616c-facf-492a-9705-90b2e362e943)

### Mode và chuyển mode
Trong ứng dụng, có 2 chế độ **Wifi Scan** (Quét những wifi mà máy tính bắt  sóng được) và **Wifi profile** (Hiện thị wifi đã từng kết nối) nhấn ![image](https://github.com/tdphatstudy/ODZ_WifiManager/assets/124871402/2b2bc3b4-e69b-4c7d-97ff-04a463a957d0) để chuyển giữa 2 mode.

### Kết nối với wifi.

  - Bước 1: Trong **Wifi Scan** mode, Nhấn vào wifi cần kết nối.
 ![image](https://github.com/tdphatstudy/ODZ_WifiManager/assets/124871402/1ffe71d0-f591-4bbd-b8bd-1540f353e8ee)

  - Bước 2: Thông tin wifi hiện lên, nhập mật khẩu vào ô password.
 ![image](https://github.com/tdphatstudy/ODZ_WifiManager/assets/124871402/e7782742-761c-427a-94fd-343c540f08b1)

  - Bước 3: Nhấn Connect. Nếu thông báo thành công nghĩa là bạn đã kết nối thành công
### Chia sẻ wifi.

  - Bước 1: Chuyển sang **Wifi Profile** mode.
  - Bước 2: Nhấn vào wifi cần chia sẻ. Thông tin sẽ hiện lên màn hình bao gồm: ssid, loại bảo mật, mật khẩu và QR Code để quét.
![image](https://github.com/tdphatstudy/ODZ_WifiManager/assets/124871402/8b63a968-4531-4e24-acc8-2528574b950a)






