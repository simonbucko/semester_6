import csv

with open("../../files/me.csv", "r") as file:
    reader = csv.reader(file)
    rows = []
    for row in reader:
        rows.append(row)

print(rows)