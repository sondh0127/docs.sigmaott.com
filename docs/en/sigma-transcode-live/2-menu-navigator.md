# Menu And Navigator

There are many navigation options in the Controller. Some menu options depend on the Sigma OTT version you installed.

## Home page and dashboard overview

Dashboard displays displays basic information, overview of the services that are running on the system. In it:

1. Transcode state

Display information overview **Transcode & Package**

![Transcode Channel Status/packager](../images/um-dashboard/transcode.png)

2. Machine state

Display information related to server **Transcode & Package**

![Server State](../images/um-dashboard/machine.png)

1. Origin state

Display information related to the Origin KPI including:

*  **Request Rate**: Request Rate requires system
*  **Response success rate**: Request rate success/failure.
*  **Bandwidth**: System bandwidth returns
*  **quantile Response Times**: Provides **P99**, **P90**, **P50**

* Note: The request to Origin is divided into two types **segment** (Request request media file-ts, m4v), **manifest** (request requires manifest file-m3u8, mpd)


![Origin System Status](../images/um-dashboard/origin.png)

## **Panel menu**

The list of system features menus. This list will depend on the system features package that you are offered.

![Menu list](../images/um-panel-menu.png){width =150px}


## Breadcrumb

Breadcrumb displays previously accessed user links. The breadcrumb content displays the top of the browser screen.

![Breadcrumb](../images/um-breadcrumb/sample.png)


## Header Menu

![Header Menu](../images/um-header-menu/main.png)

Includes 3 options:

- Enable/disable the entire screen view.
- Custom font size.
- Action with a user account.

### Enable/disable the full screen view

![Fullscreen Menu](../images/um-header-menu/fullscreen.jpg)

Allow users to enable/disable the entire screen view.

This mode is not enabled.

When activated, the application content will spread out the entire screen.

### Customize font size

![Fontsize Menu](../images/um-header-menu/font-size.jpg)

Set the font size for the entire application.

Bao gồm 4 tùy chọn `Default`, `Medium`, `Small` và `Mini` tương ứng với 4 kích thước *Mặc định*, *Trung bình*, *Nhỏ* và *Rất nhỏ*.

After selecting one of the top four options, the font size is changed.

### In a User Account

![Profile User](../images/um-header-menu/profile.jpg)&ensp; ![Home Profile User](../images/um-header-menu/home-profile.jpg)&ensp; ![Change Password Profile User](../images/um-header-menu/change-pwd-profile.jpg)&ensp; ![Logout Profile User](../images/um-header-menu/logout-profile.jpg)

Allows users to manipulate with the account after login to the system.

These include 4 options `Home`, `Change password` and `Log out`.

- `Home` navigation User on **Page**.
- `Change password` changes the password of the user account. This option will navigate the user to page **Exchange**.
- `Logout` registers the current account and the user navigation to page **Logout**.


## Server Manager List

Section  **Server** displays system information to monitor and manage the server. Host states:

* **live**: Server registered and also connected to the control system.
* **dead**: The server registered but no longer connected to the control system

System **Sigma Transcoder** managing two types of servers:

* **Transcode**: Perform multimedia content code transfer tasks
* **Package**: Impleming of packaged tasks

![Server classification](../images/um-machine-tab.png)

On a system interface screen you can list and monitor servers in different items.


![Server List](../images/um-machine-list.png)

In it:


| title       | Description                                      |
| ----------- | ------------------------------------------------ |
| **#**       | Server order number                              |
| **Machine** | Register server address                          |
| **GPU**     | Does the machine use **GPU** or not              |
| **CPU**     | The machine uses **CPU**                         |
| **Task**    | The number of tasks being executed on the server |
| **Speed**   | Lowest task execution speed on server (0-1)      |
| **Percent** | The% of the server's downloads are performing    |
| **Ram**     | %Ram server is using                             |
| **Status**  | State of Server **live** or **dead**             |

