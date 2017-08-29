# Check IP tool

Scrutinizer Code Quality:
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/wickd/ipsubnetchecker/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/wickd/ipsubnetchecker/?branch=master)

Build status:
[![Build Status](https://scrutinizer-ci.com/g/wickd/ipsubnetchecker/badges/build.png?b=master)](https://scrutinizer-ci.com/g/wickd/ipsubnetchecker/build-status/master)

Main idea is to check if given IP refers to given subnet.
For example:
```
	IP - 10.0.5.24
	Subnet - 10.0.0.0/16
	Output - true
```
--------------------------
```
	IP - 29.108.240.54
	Subnet - 218.128.105.248/27
	Output - false
```
For server side please use node.js
For client side you can use whatever you want
For initial tests - https://tools.tracemyip.org/IPv4-check-if-ip-is-in-subnet/"

# System requirements

Application was developed on v8.4.0 of the nodejs, but it possible can runs on older versions.
```
	node: v8.4.0
	npm: v5.3.0
```

# Install

1. Use git clone to install local repository.
```
git clone https://github.com/wickd/ipsubnetchecker.git
```

2. Use npm instll in the root of project directory to install dependency modules.

```
npm install
```

3. Run application via npm. It will start the local server running on port 3000;
```
npm start
```

4. Open in browser url "http://localhost:3000/"