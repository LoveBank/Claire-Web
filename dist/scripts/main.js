"use strict";console.log("'Hello 'Hello!");var apiDomainURL="";apiDomainURL="localhost"===window.location.hostname?"http://localhost:3000":"https://frank.treasury.love";var profile_firstname=localStorage.getItem("profile_firstname"),linked_ID=localStorage.getItem("linked_profile_id"),linked_FirstName=localStorage.getItem("linked_profile_firstname");$(function(){$("#message").hide()}),profile_firstname&&(console.log("Found profile firstname from storage "+profile_firstname),$("#profile-name").text("Welcome "+profile_firstname),$("#profile").hide()),linked_FirstName&&($("#linked_FirstName").text("Linked to "+linked_FirstName),$("#linked-profile-form").hide()),null===linked_ID&&(window.location="welcome.html"),$("input[type=radio][name=received]").change(function(){"received"==this.value?$("#rating-element").show():"given"==this.value&&$("#rating-element").hide()}),$("#love-bank").submit(function(){var e=$("#rating").val(),t=$(this).find("textarea").val(),a=localStorage.getItem("profile_id"),o='{ "data":{ "type": "love-banks","relationships": {"profile":{ "data":{ "type": "profiles", "id": "'+a+'" }}},"attributes": {"note":"'+t+'", "rating":'+e+"}}}";console.log(o),$.ajax({type:"POST",url:apiDomainURL+$(this).attr("action"),data:o,headers:{Accept:"application/json","Content-Type":"application/vnd.api+json"},dataType:"JSON"}).success(function(e){console.log("JSON success response",e),$("#message").text("Success!").show()}).error(function(e){console.log(e),$("#message").text("Oops, there was a problem").show()}),event.preventDefault()}),$("#mood").submit(function(){var e=$("#rating").val(),t=$(this).find("textarea").val(),a=localStorage.getItem("profile_id"),o='{ "data":{ "type": "moods","relationships": {"profile":{ "data":{ "type": "profiles", "id": "'+a+'" }}},"attributes": {"note":"'+t+'", "rating":'+e+"}}}";console.log(o),$.ajax({type:$(this).attr("method"),url:apiDomainURL+$(this).attr("action"),data:o,headers:{Accept:"application/json","Content-Type":"application/vnd.api+json"},dataType:"JSON"}).success(function(e){console.log("JSON success response",e),$("#message").text("Success!").show()}).error(function(e){console.log(e),$("#message").text("Oops, there was a problem").show()}),event.preventDefault()}),$("#entry").submit(function(){var e=$("#date-picker-2").val(),t=$("#rating").val(),a=$("input[name=received]:checked",$(this)).val();"given"===a?(a=!1,t=null):a=!0;var o=$("input[name=keep_private]:checked",$(this)).val(),i=$(this).find("textarea").val(),n=localStorage.getItem("profile_id");"undefined"==typeof a&&(a=!1),"undefined"==typeof o&&(o=!1);var s='{ "data":{ "type": "entries","relationships": {"profile":{ "data":{ "type": "profiles", "id": "'+n+'" }}},"attributes": {"received":"'+a+'","private":"'+o+'","note":"'+i+'", "rating":'+t+',"linked-profile-id":'+linked_ID+', "occurred-on":"'+e+'"}}}';console.log(s),$.ajax({type:$(this).attr("method"),url:apiDomainURL+$(this).attr("action"),data:s,headers:{Accept:"application/json","Content-Type":"application/vnd.api+json"},dataType:"JSON"}).success(function(e){console.log("JSON success response",e),$("#message").text("Success!").show()}).error(function(e){console.log(e),$("#message").text("Oops, there was a problem").show()}),event.preventDefault()});