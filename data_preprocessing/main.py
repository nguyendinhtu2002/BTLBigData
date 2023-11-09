import pandas as pd
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans

# đọc file csv
data = pd.read_csv('Customers.csv')

# loại bỏ cột customer_id, gender
data = data.drop(['customer_id', 'gender'], axis='columns')

# Xử lý thuộc tính Profession bị thiếu giá trị
data['profession'].fillna(data['profession'].mode()[0], inplace=True)

# One-hot encoding cho thuộc tính 'Profession'
data = pd.get_dummies(data, columns=["profession"], drop_first=True).astype(int)

# Chuẩn hóa Min-Max Scaling cho các thuộc tính
columns_to_scale = ['annual_income', 'spending_score', 'work_experience', 'family_size']
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
plt.ylabel('WCSS')
plt.xlabel('Cluster number')
plt.show()





