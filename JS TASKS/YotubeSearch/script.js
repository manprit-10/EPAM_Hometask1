/**************************  ----DESIGN----  ************************************ */
//creating header
var header_tag = document.createElement("header");
document.body.append(header_tag);

//creating header list
var top_list = document.createElement("ul");

//title section
var first_li = document.createElement("li");
var top_heading = document.createElement("h1");
top_heading.appendChild(document.createTextNode("YouTube Search"));
first_li.appendChild(top_heading);

//search box section
var second_li = document.createElement("li");
var search_box = document.createElement("input");
var search_button = document.createElement("button");
search_button.appendChild(document.createTextNode("Search"));
search_box.id = "search-box";
search_button.id = "search";
second_li.append(search_box);
second_li.append(search_button);
top_list.append(first_li);
top_list.append(second_li);
header_tag.appendChild(top_list);

///creating div to add fetched data
var videos = document.createElement("div");
document.body.append(videos);
videos.id = "videos";

//creatting pagination section
var button_div = document.createElement("div");
button_div.id = "bottom-div";
var prevButton = document.createElement("button");
prevButton.id = "prev";
prevButton.append(document.createTextNode("Prev"));
button_div.append(prevButton);
var page_div = document.createElement("div");
page_div.id = "page-div";
button_div.append(page_div);
var nextButton = document.createElement("button");
nextButton.id = "next";
nextButton.append(document.createTextNode("Next"));
button_div.append(nextButton);
document.body.append(button_div);


/************************************************************************************************** */
var VIDEOS = {};
var STAT = {};
var maxResults = 100;
const pagination = {
  start: 0,
  maxItems: 10,
};
var totalPages = maxResults / pagination.maxItems;
var pageNo = 1;
var start = pagination.start;
var end = pagination.start + pagination.maxItems;
var btn = document.getElementById("search");
var query;
var key = "AIzaSyArMeaI1js9ktmeq-6exwrcGPucjlpE-sw";
btn.onclick = function () {
  const input = document.getElementById("search-box");
  if (input.value < 3) {
    var err = document.getElementById("search-error");
    err.innerHTML = "*Please enter more than 3 charachters to search!";
  } else {
    var input_box = document.getElementById("search-box");
    query = input_box.value;
    fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${key}&type=video&part=snippet&maxResults=${maxResults}&q=${query}`
    )
      .then((res) => res.json())
      .then(function (data) {
        VIDEOS = data;
        var page = data.items.slice(pagination.start, pagination.maxItems);
        render(page);
      });
  }
};
function render(data) {
  videos.innerHTML = "";
  data.forEach((element) => {
    var video_div = document.createElement("div");
    video_div.className = "video-container";
    var iframe_div = document.createElement("div");
    iframe_div.className = "iframe-container";
    var info_div = document.createElement("div");
    info_div.className = "info-container";
    var video = document.createElement("iframe");

    video.setAttribute(
      "src",
      `https://www.youtube.com/embed/${element.id.videoId}`
    );
    video.setAttribute("allowfullscreen", "true");
    iframe_div.append(video);
    video_div.append(iframe_div);

    var title = document.createElement("h4");
    title.append(document.createTextNode(element.snippet.title));
    var publish = document.createElement("p");
    publish.append(
      document.createTextNode(element.snippet.publishedAt.slice(0, 10))
    );
    info_div.append(title);
    info_div.append(document.createElement("br"));
    info_div.append(document.createElement("br"));
    var publish_text = document.createElement("strong");
    publish_text.append(document.createTextNode("Published On: "));
    info_div.append(publish_text);
    info_div.append(publish);
    info_div.append(document.createElement("br"));
    info_div.append(document.createElement("br"));
    var channel_text = document.createElement("strong");
    channel_text.append(document.createTextNode("Channel: "));
    info_div.append(channel_text);
    var channel = document.createElement("p");
    channel.append(document.createTextNode(element.snippet.channelTitle));
    info_div.append(channel);
    info_div.append(document.createElement("br"));
    info_div.append(document.createElement("br"));
    var desc_text = document.createElement("strong");
    desc_text.append(document.createTextNode("Description: "));
    info_div.append(desc_text);
    var desc = document.createElement("p");
    desc.append(document.createTextNode(element.snippet.description));
    info_div.append(desc);
    video_div.append(info_div);
    videos.append(video_div);
    var hr = document.createElement("hr");
    videos.append(hr);

    var page_div = document.getElementById("page-div");
    page_div.innerHTML = `Page ${pageNo} of ${totalPages}`;
  });
}

var next = document.getElementById("next");
next.onclick = function () {
  if (start < 8) {
    pageNo += 1;
    start = start + pagination.maxItems;
    end = end + pagination.maxItems;
    var page = VIDEOS.items.slice(start, end);
    render(page);
  }
};

var prev = document.getElementById("prev");
prev.onclick = function () {
  if (start > 1) {
    pageNo -= 1;
    start = start - pagination.maxItems;
    end = end - pagination.maxItems;
    var page = VIDEOS.items.slice(start, end);
    render(page);
  }
};
