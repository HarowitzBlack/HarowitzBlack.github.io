


var glob_counter = 0;
var max_lim = 5; // end of projects, start from 0 again


// fill up the array with stuff
var str_list = [];

str_list[0] = {
    "project_name":"Kemosabe ",
    "project_desp":"Bot lib",
    "link_to_project":"www.google.com",
}

str_list[1] = {
    "project_name":"Simplifly Bot",
    "project_desp":"flight bot",
    "link_to_project":"www.google.com",
}

str_list[2] = {
    "project_name":"Serge Bot ",
    "project_desp":"crypto bot",
    "link_to_project":"www.google.com",
}

str_list[3] = {
    "project_name":"Senor Botto ",
    "project_desp":"food bot",
    "link_to_project":"www.google.com",
}

str_list[4] = {
    "project_name":"#Project ",
    "project_desp":"some random giberish blah blah blah",
    "link_to_project":"www.google.com",
}


var tit = document.getElementById('title_text');
var desp = document.getElementById('project_desp');
var url = document.getElementById('project_url');

tit.innerHTML = str_list[0].project_name;
desp.innerHTML = str_list[0].project_desp;
url.href = str_list[0].project_url;

function move_forward(){
  glob_counter +=1;
  if(glob_counter >= max_lim){
    glob_counter = 0;

  }
  tit.innerHTML = str_list[glob_counter].project_name;
  desp.innerHTML = str_list[glob_counter].project_desp;
  url.href = str_list[glob_counter].project_url;

}

function move_back(){
  glob_counter -=1;
  if(glob_counter <= 0){
    glob_counter = max_lim - 1;

  }
  tit.innerHTML = str_list[glob_counter].project_name;
  desp.innerHTML = str_list[glob_counter].project_desp;
  url.href = str_list[glob_counter].project_url;


}
