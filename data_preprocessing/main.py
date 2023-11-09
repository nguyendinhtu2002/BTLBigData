import pandas as pd
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans

# đọc file csv
data = pd.read_csv('Customers.csv')

# loại bỏ cột CustomerID, Gender
data = data.drop(['CustomerID', 'Gender'], axis='columns')

# Xử lý thuộc tính Profession bị thiếu giá trị
data['Profession'].fillna(data['Profession'].mode()[0], inplace=True)

# One-hot encoding cho thuộc tính 'Profession'
data = pd.get_dummies(data, columns=["Profession"], drop_first=True).astype(int)

# Chuẩn hóa Min-Max Scaling cho các thuộc tính
columns_to_scale = ['Annual Income ($)', 'Spending Score (1-100)', 'Work Experience', 'Family Size']
data[columns_to_scale] = ((data[columns_to_scale] - data[columns_to_scale].min()) /
                         (data[columns_to_scale].max() - data[columns_to_scale].min()))

#Lưu dữ liệu đã chuẩn hóa vào một file mới
# data.to_csv("data_preprocessing.csv", index=False)

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





