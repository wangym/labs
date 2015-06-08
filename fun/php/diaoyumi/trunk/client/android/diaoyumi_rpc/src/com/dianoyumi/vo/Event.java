package com.dianoyumi.vo;

import java.util.Date;

import com.dianoyumi.common.Tools;


public class Event {
	private int id;
	private int userId;
	private String rid;
	private String type;
	private Date eventTime;
	private double lat;
	private double lng;
	private String place;
	private String companion;
	private String picture;
	private String title;
	private double price;
	private String properties;
	private String desc;
	private int status;
	private boolean newPlace= false;
	
	
	
	@Override
	public boolean equals(Object obj) {
		String s1 = ((Event) obj).toString();
		return this.toString().equals(s1);
	}
	@Override
	public String toString() {
		StringBuffer sb = new StringBuffer();
		sb.append("rid:" + rid).append("\r\n");
		sb.append("userID:" + userId).append("\r\n");
		sb.append("type:" + type).append("\r\n");
		sb.append("eventTime:" + Tools.date2string(eventTime)).append("\r\n");
		sb.append("lat:" + lat).append("\r\n");
		sb.append("lng:" + lng).append("\r\n");
		sb.append("place:" + place).append("\r\n");
		sb.append("companion:" + companion).append("\r\n");
		sb.append("picture:" + picture).append("\r\n");
		sb.append("title:" + title).append("\r\n");
		sb.append("price:" + price).append("\r\n");
		sb.append("properties:" + properties).append("\r\n");
		sb.append("desc:" + desc).append("\r\n");
		sb.append("status:" + status).append("\r\n");
		sb.append("newPlace:" + newPlace).append("\r\n");
		
		return sb.toString();
	}
	public boolean isNewPlace() {
		return newPlace;
	}
	public void setNewPlace(boolean newPlace) {
		this.newPlace = newPlace;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getRid() {
		return rid;
	}
	public void setRid(String rid) {
		this.rid = rid;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public Date getEventTime() {
		return eventTime;
	}
	public void setEventTime(Date eventTime) {
		this.eventTime = eventTime;
	}
	public double getLat() {
		return lat;
	}
	public void setLat(double lat) {
		this.lat = lat;
	}
	public double getLng() {
		return lng;
	}
	public void setLng(double lng) {
		this.lng = lng;
	}
	public String getPlace() {
		return place;
	}
	public void setPlace(String place) {
		this.place = place;
	}
	public String getCompanion() {
		return companion;
	}
	public void setCompanion(String companion) {
		this.companion = companion;
	}
	public String getPicture() {
		return picture;
	}
	public void setPicture(String picture) {
		this.picture = picture;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public String getProperties() {
		return properties;
	}
	public void setProperties(String properties) {
		this.properties = properties;
	}
	public String getDesc() {
		return desc;
	}
	public void setDesc(String desc) {
		this.desc = desc;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	
}