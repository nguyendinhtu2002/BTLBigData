import pandas as pd
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans
from sklearn.preprocessing import LabelEncoder
from sklearn.impute import SimpleImputer

# đọc file csv
data = pd.read_csv('Customers.csv')

# loại bỏ cột CustomerID
data = data.drop(['CustomerID'], axis='columns')

print("Số giá trị thiếu ban đầu:")
print(data.isnull().sum())

# Tạo một đối tượng SimpleImputer với strategy='most_frequent':
# giá trị xuất hiện nhiều nhất trong cột đó sẽ được chèn vào những chỗ đang bị thiếu dl
imputer = SimpleImputer(strategy='most_frequent')

# Chuyển cột 'Profession' thành mảng 2D, xử lý giá trị bị thiếu và chuyển lại thành Series pandas
data['Profession'] = pd.Series(imputer.fit_transform(data[['Profession']]).ravel())

print("Số giá trị thiếu sau khi đã xử lý:")
print(data.isnull().sum())

# Mã hóa giá trị text sang thành giá trị số
categorical_columns = ['Gender', 'Profession']
for cat_col in categorical_columns:

    encoder = LabelEncoder()

    encoder = encoder.fit(data[cat_col])
    print(encoder.classes_)

    data[cat_col] = encoder.transform(data[cat_col])
    print(data[cat_col])

# chuẩn hóa dữ liệu
columns_to_scale = ['Age', 'Annual Income ($)', 'Profession', 'Work Experience', 'Family Size']
data[columns_to_scale] = ((data[columns_to_scale] - data[columns_to_scale].min()) /
                         (data[columns_to_scale].max() - data[columns_to_scale].min()))

print(data)

# Lưu dữ liệu đã chuẩn hóa vào một file mới
data.to_csv("Customers_data_preprocessing.csv", index=False)

#Elbow
km = KMeans()
k_range = range(1,10)
#tổng bình phương khoảng cách (Within-Cluster Sum of Squares - WCSS) giữa các điểm dữ liệu và trung tâm của cụm.
wcss = []
for k in k_range:
    km = KMeans(n_clusters=k)
    km.fit(data)
    wcss.append(km.inertia_)

# vẽ biểu đồ
plt.plot(k_range,wcss,marker='o')
plt.title('Elbow Method')
plt.ylabel('WCSS')
plt.xlabel('Cluster number')
plt.show()








