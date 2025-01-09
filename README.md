# Cryptocurrency Price Tracker App

A simple React application that fetches real-time cryptocurrency prices and displays them in a stylish interface. The app uses the CoinGecko API to display information about the latest prices, 24-hour price changes, and coin logos for multiple cryptocurrencies.

## Features

- Displays the latest cryptocurrency prices in USD for several coins.
- Shows 24-hour price change percentages (positive/negative) with corresponding color coding (green for rising, red for falling).
- Fetches data from CoinGecko API.
- Responsive design that adapts to different screen sizes (mobile-friendly).

## Supported Cryptocurrencies

- Bitcoin
- Ethereum
- Tether
- Litecoin
- Cardano
- Dogecoin

## Screenshots

![Screenshot 1](./screenshot1.png)  
![Screenshot 2](./screenshot2.png)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/crypto-price-tracker.git
   ```

2. Navigate into the project directory:
   ```bash
   cd crypto-price-tracker
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the app:
   ```bash
   npm start
   ```

The app will be available at `http://localhost:3000` in your browser.

## Folder Structure

```plaintext
crypto-price-tracker/
├── public/
│   ├── images/
│   │   ├── bitcoin.png
│   │   ├── tether.png
│   │   └── ethereum.png
│   ├── index.html
│   └── ... (other static files)
├── src/
│   ├── App.js
│   ├── App.css
│   └── ... (other components)
├── package.json
└── ... (other files)
```

## Dependencies

- React
- React DOM
- Axios (if used for API requests)
- CSS for styling (via `App.css`)

## How It Works

1. The app fetches data from the **CoinGecko API** using the `fetch()` function in `App.js`.
2. It processes the data, extracts relevant details (price, 24-hour change), and stores them in the component's state.
3. The app renders the data dynamically, displaying each cryptocurrency's price, change, and logo.
4. The design includes conditional styling that changes the background and text color based on the price change (green for rising, red for falling).

## Contributing

If you'd like to contribute to this project:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them.
4. Open a pull request with a detailed description of your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
