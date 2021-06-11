import requests
from bs4 import BeautifulSoup
import csv

URL = "http://chinakitchenwindsor.com/menu-category/our-menu/"

page = requests.get(URL)
soup = BeautifulSoup(page.content, 'html.parser')
menu =soup.find_all("div", class_="food_menu_text")

with open("data_raw.csv", 'w', newline='') as csvfile:
    spamwriter = csv.writer(csvfile)
    spamwriter.writerow(["name", "each", "price", "spicy", "category"])
    
    cat = soup.find_all("div", class_="food_menu_text_category_wrap")
    for c in cat:
        category = c.find("h3", "food_menu_catagory_name").text.strip()
        items = c.find_all("div", class_="food_menu_text clearfix")
        for item in items:
            name = item.find("div", class_="food_menu_text_name")
            each = item.find_all('span', class_="food_menu_price_name")
            price = item.find('div', class_="food_menu_text_price")
            spicy = item.find("img")

            menuItem = {
                "name": name.text.strip(),
                "each": [e.text.strip() for e in each] if len(each) >=1 else [],
                "price": price.text.strip() if price else "",
                "spicy": "spicy" if spicy != None else "",
                "category": category
            }

            spamwriter.writerow([menuItem["name"],menuItem["each"],menuItem["price"],menuItem["spicy"],menuItem["category"] ])
