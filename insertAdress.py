import xml.etree.ElementTree as ET
import mysql.connector

# Analysez le fichier XML
tree = ET.parse('../.xml')
root = tree.getroot()

# Établissez une connexion à la base de données MySQL
conn = mysql.connector.connect(
    host='localhost',
    user='utilisateur',
    password='mot_de_passe',
    database='ma_base_de_donnees'
)

cursor = conn.cursor()

# Obtenez les noms des colonnes à partir des éléments XML
columns = []
for element in root:
    for child in element:
        column_name = child.tag
        if column_name not in columns:
            columns.append(column_name)

# Créez une table avec les colonnes correspondantes
create_table_query = "CREATE TABLE ma_table ("
for column in columns:
    create_table_query += f"{column} VARCHAR(255), "
create_table_query = create_table_query[:-2]  # Supprime la dernière virgule et l'espace
create_table_query += ");"

cursor.execute(create_table_query)

# Parcourez les éléments XML et insérez les données dans la base de données
for element in root:
    # Créez une liste des valeurs des colonnes
    values = [element.find(column).text for column in columns]
    
    # Générez une requête d'insertion dynamique
    insert_query = f"INSERT INTO ma_table ({', '.join(columns)}) VALUES ({', '.join(['%s'] * len(columns))})"
    
    cursor.execute(insert_query, values)

# Validez les changements et fermez la connexion
conn.commit()
cursor.close()
conn.close()
