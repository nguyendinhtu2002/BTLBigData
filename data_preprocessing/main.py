import pandas as pd
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans

# đọc file csv
data = pd.read_csv('Customers.csv')

# loại bỏ cột CustomerID
data = data.drop(['CustomerID'], axis='columns')

# Xử lý thuộc tính Profession bị thiếu giá trị
data['Profession'].fillna(data['Profession'].mode()[0], inplace=True)

# One-hot encoding cho thuộc tính 'Gender'
d = {"Male": 1, "Female": 0}
data['Gender'] = data['Gender'].map(d)

# One-hot encoding cho thuộc tính 'Profession'
data = pd.get_dummies(data, columns=["Profession"], drop_first=True).astype(int)

# Chuẩn hóa thuộc tính 'Annual Income ($)'
Range = 'Annual Income New ($)'
data[Range] = 0
c = 'Annual Income ($)'
data.loc[((data[c] > 0) & (data[c] <= 20000)), Range] = 1
data.loc[((data[c] > 20000) & (data[c] <= 40000)), Range] = 2
data.loc[((data[c] > 40000) & (data[c] <= 60000)), Range] = 3
data.loc[((data[c] > 60000) & (data[c] <= 80000)), Range] = 4
data.loc[((data[c] > 80000) & (data[c] <= 100000)), Range] = 5
data.loc[((data[c] > 100000) & (data[c] <= 120000)), Range] = 6
data.loc[((data[c] > 120000) & (data[c] <= 140000)), Range] = 7
data.loc[((data[c] > 140000) & (data[c] <= 160000)), Range] = 8
data.loc[((data[c] > 160000) & (data[c] <= 180000)), Range] = 9
data.loc[((data[c] > 180000) & (data[c] <= 200000)), Range] = 10
data.loc[((data[c] > 200000)), Range] = 11
data = data.drop(['Annual Income ($)'], axis='columns')

#Lưu dữ liệu đã chuẩn hóa vào một file mới
data.to_csv("data_preprocessing.csv", index=False)

#Elbow
km = KMeans()
k_range = range(1,15)
#tổng bình phương khoảng cách (Within-Cluster Sum of Squares - WCSS) giữa các điểm dữ liệu và trung tâm của cụm.
wcss = []
for k in k_range:
    km = KMeans(n_clusters=k)
    km.fit(data)
    wcss.append(km.inertia_)

plt.plot(k_range,wcss,marker='o')
plt.title('Elbow Method')
plt.ylabel('Total distance')
plt.xlabel('Cluster number')
plt.show()





