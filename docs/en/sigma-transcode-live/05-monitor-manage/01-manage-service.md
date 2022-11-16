---
title: 'Service Management'
order: 1
---

# {{ $frontmatter.title }}


## Operations with service

For a list of content, the application allows the user to interact with each element in the list through a group of functional buttons (See the illustration below). These buttons will show at the final column of the list table.

![Action Buttons](../images/um-action-btns/sample.png)

---

**\ * NOTE**

Due to each section of the content on the app there are different features and careers, so the interface that displays functional buttons may differ slightly.

---

### Detailed description

- ![Interaction Button](../images/um-action-btns/interaction.png) access to interactive online.
- ![Start Button](../images/um-action-btns/start.png) triggered the active status of the service.
- ![Stop Button](../images/um-action-btns/stop.png) Activate service stop status.
- ![Reset Button](../images/um-action-btns/reset.png) setting up all of the object's data on the original state.
- ![Edit Button](../images/um-action-btns/edit.png) edit the information, display the interface for the selected object's data editing.
- ![Clone Button](../images/um-action-btns/clone.png) creating a new object whose data is identical to the original object, while also customisable to a few parameters of the new object to fit.
- ![Delete Button](../images/um-action-btns/delete.png) Delete the selected object. Before the implementation of the application will require the user to authenticate again.


## Auto Refresh

![Auto Refresh](../images/um-auto-refresh.jpg)

Allow shortcuts to automatically update the data after a certain amount of time.

There are five values to choose: *Turn* and intervals *Time 5s*, *Time 10s*, *Time 15s*, *Time 20s* corresponds to the time values of 5 seconds, 10 seconds, 15 seconds and 20 seconds will automatically update the new data for the user.


## Filter

In the contents of the table list, there is filter feature support, search for elements in one or a few specific conditions. The filter is displayed above each table.

After the completion of the filter/filtration, the valid elements are displayed on the interface.

### Livestream Filter

![Livestream Filter](../images/um-filter/livestream.png)

The livestream filter allows users to search for data according to the data fields as follows (from left to right on the description):

- `Search` named livestream, the username livestream.
- `Status` the livestream state, consisting of 4 selections **Init**, **Live**, **Ended**, **Error**.

  ![Status Select](../images/um-filter/status-livestream.jpg)

- `Tag` tag assigned to livestream, user input tag.
- `Publisher` The publisher livestream.
- `Start date-End date` day start and date ending livestream.

  ![Date Range Select](../images/um-filter/date-range.jpg)

The user can search by entering multiple fields at the same time, then press the confirmation button to search for, or press the ![Reset Button](../images/um-filter/reset-livestream.png){height=17px} `Reset` to remove all previously imported information.

### Channel Filter

![Channel Filter](../images/um-filter/channel.png)

The channel filter allows users to search for data according to the data fields as follows (from left to right on the description):

- `Status` The channel state, consisting of four options: `All`, `Live`, `Stated`, `Error`.
- `Type` types of channels, including 2 options `Package`, `Transcode`.

  ![Channel Type](../images/um-filter/type-channel.jpg)

- `Tag` tag assigned to the channel, user input tag.
- `Name` locating the channel, the user name entry requires a search.

## Page

![Patination](../images/um-pagination/main.png)

Perform the cataract correction actions with a list of lists that are listed in the list.

The page interface consists of four main components:

- Total number of available elements.

  ![Counter Pagination](../images/um-pagination/counter.png)

- The option of the number of elements displayed on a page.<!-- !\[Fontsize Menu\](../images/um-pagination/page-size.png) -->![Page Size](../images/um-pagination/page-size-selection.jpg)

  It is possible to choose `5`, `10`, `15`, `20`, `50`, `100` elements display on a page by selecting the corresponding values in the page menu, the default value is `10`.

- The current order.

  ![Page Select](../images/um-pagination/page-selection.png)

  - List existing pages.
  - The current page is highlighted in blue ![Active Page](../images/um-pagination/actived-page.png){height=17px}.
  - Move to the previous page/next page by selecting the ![Previous](../images/um-pagination/previous.png)symbol {height=17px} and ![Next](../images/um-pagination/next.png){height=17px}.

- Move to any page.

  ![Next](../images/um-pagination/jump-to.jpg)

  It can be moved to any page by entering the order number of the page in the picture above.

