---
title: 'Cara Install Kubernetes Cluster'
date: '2021-11-02'
tags: ['docker', 'kubernetes']
draft: false
summary: 'Kubernetes adalah platform open source yang berfungsi untuk melakukan manajemen workload aplikasi yang dikontainerisasi, serta menyediakan konfigurasi dan otomatisasi secara deklaratif.'
---

Kubernetes adalah platform open source yang berfungsi untuk melakukan manajemen workload aplikasi yang dikontainerisasi, serta menyediakan konfigurasi dan otomatisasi secara deklaratif. Kubernetes berada di dalam ekosistem yang besar dan berkembang cepat. Service, support, dan perkakas kubernetes tersedia secara meluas.

Kubernetes diluncurkan sebagai produk open source oleh Google pada tahun 2014 lalu. Salah satu alasan diluncurnya kubernetes ini dibangun berdasarkan pengalaman Google selama satu setengah dekade dalam menjalankan workload secara bersamaan dengan kontribusi berupa ide-ide terbaik yang diberikan oleh komunitas.

Kubernetes merupakan sejenis aplikasi cluster manajement open source yang berasal dari aplikasi internal google. Aplikasi ini awalnya digunakan oleh google secara umum dengan nama Borg dengan tujuan untuk mengelola cluster milik mereka sendiri. Bahkan dari segi bisnis, aplikasi ini merupakan senjata yang diandalkan oleh google dengan tujuan mendongkrak naiknya peringkat google di pasar cloud hosting.

persyaratan minimum :
- RAM 2 GiB atau lebih
- Min 2 CPU

Pengaturan Lab saya berisi 3server, dimana 1 VM sebagai kontrol/master dan 2node yang akan digunakan untuk menjalankan beban kerja kontainer.

1. Mapping hostname di node master
```sh
sudo nano /etc/hosts
```

2. Uji koneksi antar VM
```
ping -c 3 master
ping -c 3 worker1
ping -c 3 worker2
```

3. Pastikan semua mesin diperbarui, jalankan perintah dibawah disetiap node
```
sudo apt update
sudo apt upgrade -y
sudo apt autoremove -y
```

4. Instalasi Docker
```
sudo apt-get install apt-transport-https ca-certificates curl gnupg-agent software-properties-common -y
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo apt-key fingerprint 0EBFCD88
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt-get update -y
sudo apt-get install docker-ce docker-ce-cli containerd.io -y
```

5. Instalasi kubectl, kubelet dan kubeadm
```
sudo apt install -y apt-transport-https; curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -
echo 'deb http://apt.kubernetes.io/ kubernetes-xenial main' > kubernetes.list
sudo mv kubernetes.list /etc/apt/sources.list.d/kubernetes.list
sudo apt update; sudo apt install -y kubectl kubelet kubeadm
sudo apt-mark hold kubelet kubeadm kubectl
```

6. Inisialisasi master, jalankan perintah dibawah hanya di node master
```
swapon -s
sudo swapoff -a
sudo kubeadm init --pod-network-cidr=10.244.1.0/16
```

7. Buat direktori untuk kluster dan salin konfigurasi nya
```
mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
```

8. Beri izin file konfigurasi
```
sudo chown $(id -u):$(id -g) $HOME/.kube/config
```

9. Deploying pod flannel di node Master
```
sudo kubectl apply -f https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml
```

10. Tampilkan token untuk Join node worker ke master dan salin outputnya
```
sudo kubeadm token create --print-join-command
```


11. Join Node worker ke master
Paste output yang sudah disalin dilangkah 10

12. Cek apakah node worker sudah bergabung
```
sudo kubectl get nodes
```
