import { Text } from 'react-native';
import React, { Component } from 'react';
import { locations, categories, Accounts, Status, Comments, Participants } from './dataArrays';
import moment from 'moment';

export function getCategoryById(categoryId) {
  let category;
  categories.map(data => {
    if (data.id == categoryId) {
      category = data;
    }
  });
  return category;
}


export function getLocations(categoryId) {
  const locationsArray = [];
  locations.map(data => {
    if (data.categoryId == categoryId) {
      locationsArray.push(data);
    }
  });
  return locationsArray;
}

export function getUser(idAccount) {
  
  const user = Accounts.find(data => data.id == idAccount);
  return user;
}

export function getUserbyEmail(email) {
  
  const user = Accounts.find(data => data.email == email);
  return user;
}

export function getComment(idStatus) {
  const cmts = [];
  Comments.map(data => {
    if (data.idStatus == idStatus) {
      cmts.push(data);
    }
  });
  return cmts;
}

export function checkAccount(email, password){

  let check = false;
  Accounts.map(data => {
    if (data.email == email && data.pw == password) {
      check = true;
    }
  });
  return check;
}

export function addAccount(name, email, password){
  Accounts.push({
    id: Accounts.length + 1,
    name: name,
    email: email,
    pw: password,
    photo_url:'https://upload.wikimedia.org/wikipedia/commons/7/70/User_icon_BLACK-01.png?20140731221454'
  });
}

 


export function CreateStatus(content, email) {
  if (content == '') {
    alert('Bạn chưa nhập nội dung');
    return;
  }
    const currentTime = moment().format('HH:mm · DD/MM/YY');
    Status.push({
      id: Status.length + 1,
      content: content,
      idAccount: getUserbyEmail(email).id,
      time: currentTime,
      like: 0,
      cmt: 0,
    });
  alert("Đăng bài thành công");
}

export function addParticipant(email, event) {
  const user = getUserbyEmail(email)
  const elementWithIdEvent = Participants.find(item => (item.idAccount === user.id && item.idEvent === event.id));
  if (elementWithIdEvent) {
    alert('Bạn đã tham gia hoạt động trước đây!');
    return;
  }

  else if(user.id === 0) {
    alert('boss đi chỗ khác chơi!');
    return;
  }
  ///const currentTime = moment().format('HH:mm · DD/MM/YY');
    Participants.push({
      id: Participants.length,
      idAccount: user.id,
      idEvent: event.id,
      Point: 0,
    });
  alert("Đăng kí thành công");
}


