import requests
from bs4 import BeautifulSoup
import csv

URL = "http://chinakitchenwindsor.com/menu-category/china-kitchen-combinations/"

page = requests.get(URL)
soup = BeautifulSoup(page.content, 'html.parser')
menu =soup.find_all("section", {"id": "chapter-62"})
# print(menu)

with open("data_raw_comb.csv", 'w', newline='') as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(["name", "each", "price", "spicy", "category", "description"])

    for c in menu:
        cat = c.find("h3", class_="food_menu_catagory_name")
        # print(cat)

        items = c.find_all("div", class_="food_menu_small_image clearfix")
        for item in items:
            name = item.find("div", class_="food_menu_small_image_name")
            price = item.find('div', class_="food_menu_small_image_price")
            desc = item.find("div", class_="food_menu_small_image_desc")

            menuItem = {
                "name": name.text.strip(),
                "price": price.text.strip() if price else "",
                "each": "",
                "spicy": "",
                "category": cat.text.strip(),
                "desc": desc.text.strip(),
            }
            writer.writerow([menuItem["name"],menuItem["each"],menuItem["price"],menuItem["spicy"],menuItem["category"], menuItem["desc"] ])