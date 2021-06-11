import csv
import json


def convertToJSON(csvPath, jsonPath):
    data = {}
    tags = set()

    with open(csvPath, encoding='cp1252', newline='') as csvfile:
        reader = csv.reader(csvfile)
        next(reader, None)
        for row in reader:
            name = row[0]
            each = row[1]
            price = row[2]
            spicy = row[3]
            category = row[4]
            desc = row[5]

            menuItem = {
                "name": name,
                "each": each,
                "price": price,
                "spicy": spicy,
                # "category": category,
                "desc": desc,
            }
            
            if category not in tags:
                tags.add(category)

            if category in data:
                data[category].append(menuItem)
            else:
                data[category] = [menuItem]
    # print(tags)
    with open(jsonPath, "w") as outfile:
        json.dump(data, outfile)

            


csvPath = r'data_raw.csv'
jsonPath = r'tags.json'

convertToJSON(csvPath, jsonPath)