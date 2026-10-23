
# 🌿 Green Earth – Save Forest Website

## 📌 About the Project

Green Earth is a simple, responsive environmental awareness website created to spread awareness about forest conservation and the importance of protecting nature.

The website encourages people to plant trees, reduce paper waste, protect wildlife, and contribute to a greener future.

This project is built using HTML, CSS, and JavaScript and can be deployed on an Ubuntu Virtual Machine in Microsoft Azure using the Nginx web server.

## 🎯 Objectives

- Promote awareness about forest conservation.
- Explain the importance of forests and wildlife.
- Encourage people to take environmental action.
- Learn frontend web development using HTML, CSS, and JavaScript.
- Understand website hosting using Microsoft Azure and Nginx.

## ✨ Features

- Clean and nature-inspired user interface.
- Home section introducing Green Earth.
- About section explaining the importance of forests.
- Interactive buttons using JavaScript.
- Responsive layout for mobile and desktop screens.
- Ready for deployment on an Azure Virtual Machine.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Website structure and content |
| CSS3 | Styling, layout, and responsiveness |
| JavaScript | Interactive buttons and messages |
| Ubuntu Linux | Cloud virtual machine operating system |
| Nginx | Web server for hosting the website |
| Microsoft Azure | Cloud infrastructure and deployment |

## 📁 Project Structure

```text
GreenEarth-Website/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## 💻 Run the Website Locally

### Step 1: Download or Clone the Project

If the project is hosted on GitHub, clone the repository:

```bash
git clone YOUR_REPOSITORY_URL
```

Alternatively, download the project files to your computer.

### Step 2: Open the Project

Open the `GreenEarth-Website` folder in Visual Studio Code.

### Step 3: Run the Website

Open `index.html` in your web browser.

Make sure `index.html`, `style.css`, and `script.js` are in the same folder.

## ☁️ Deploy on Microsoft Azure

### Step 1: Create Azure Resources

Create the following resources in the East Asia region:

- Resource Group: `GreenEarth-RG`
- Virtual Network: `GreenEarth-VNet`
- Subnet: `GreenEarth-Subnet`
- Virtual Machine: `GreenEarth-VM`
- Network Security Group: `GreenEarth-NSG`

Configure the VM to use the created virtual network and subnet.

### Step 2: Connect to the Virtual Machine

Connect to the Ubuntu VM using SSH:

```bash
ssh -i "PATH_TO_PRIVATE_KEY.pem" azureuser@YOUR_PUBLIC_IP
```

Replace the example key path, username, and public IP with your actual VM details.

### Step 3: Install Nginx

Run these commands on the Ubuntu VM:

```bash
sudo apt update
sudo apt install nginx -y
sudo systemctl enable --now nginx
```

Verify the web server status:

```bash
sudo systemctl status nginx
```

### Step 4: Upload Website Files

Copy `index.html`, `style.css`, and `script.js` to the VM using SCP or another secure file-transfer method.

For example, from Windows PowerShell:

```powershell
scp -i "PATH_TO_PRIVATE_KEY.pem" index.html style.css script.js azureuser@YOUR_PUBLIC_IP:/home/azureuser/
```

Then, on the VM, copy the files into the Nginx document directory:

```bash
sudo cp /home/azureuser/index.html /var/www/html/
sudo cp /home/azureuser/style.css /var/www/html/
sudo cp /home/azureuser/script.js /var/www/html/
```

### Step 5: Configure Network Access

In the Azure Network Security Group, configure inbound rules:

- SSH: TCP port 22, restricted to your trusted IP address.
- HTTP: TCP port 80, to allow website access.
- HTTPS: TCP port 443, only if HTTPS is configured.

### Step 6: Open the Website

Open this address in your browser:

```text
http://YOUR_PUBLIC_IP
```

Replace `YOUR_PUBLIC_IP` with the actual public IP address of your Azure VM.

If everything is configured correctly, the Green Earth website should appear.

## 🔒 Security Considerations

- Restrict SSH access to trusted IP addresses.
- Keep the Ubuntu operating system and Nginx updated.
- Never upload private SSH keys to GitHub.
- Avoid exposing unnecessary ports.
- Configure HTTPS before using the website for secure production traffic.

## 🌱 Future Improvements

- Add a tree-planting campaign section.
- Include environmental news and conservation tips.
- Add a volunteer registration form.
- Integrate a database to store volunteer information.
- Add images and animations about forest conservation.
- Configure HTTPS with a valid TLS certificate.

## 🎓 Learning Outcomes

Through this project, we learn:

- How to build a website using HTML, CSS, and JavaScript.
- How to create an Azure Virtual Network and subnet.
- How to deploy an Ubuntu Virtual Machine.
- How to configure Network Security Group rules.
- How to connect to a Linux VM using SSH.
- How to install Nginx and host a website on Azure.

## 👨‍💻 Author

**Name:** Ayush Singh  
**Project:** Green Earth – Save Forest Website  
**Purpose:** Cloud Computing Practical

## 📄 License

This project is intended for educational and learning purposes. You may modify and improve it for your own projects.

---

**Save Forests. Protect Wildlife. Build a Greener Future. 🌍🌳**
