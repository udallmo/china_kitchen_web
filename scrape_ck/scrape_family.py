import requests
from bs4 import BeautifulSoup
import csv

URL = "http://chinakitchenwindsor.com/menu-category/food-menu/"

page = requests.get(URL)
soup = BeautifulSoup(page.content, 'html.parser')
menu =soup.find_all("div", class_="food_menu_text_category_wrap")

with open("data_raw_family.csv", 'w', newline='') as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(["name", "each", "price", "spicy", "category", "description"])

    for c in menu:
        cat = c.find("h3", "food_menu_catagory_name")

        items = c.find_all("div", class_="food_menu_text clearfix")
        for item in items:
            name = item.find("div", class_="food_menu_text_name")
            price = item.find('div', class_="food_menu_text_price")
            desc = item.find("div", class_="food_menu_text_desc")

            menuItem = {
                "name": name.text.strip(),
                "price": price.text.strip() if price else "",
                "each": "",
                "spicy": "",
                "category": cat.text.strip(),
                "desc": str(desc.text.strip().split(";")),
            }

            writer.writerow([menuItem["name"],menuItem["each"],menuItem["price"],menuItem["spicy"],menuItem["category"], menuItem["desc"] ])
