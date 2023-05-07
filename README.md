# Command-Line within Maestro

Maestro works inside a sandbox, which means you literally can't even stick your nose out of the box. Well, almost. Let's bypass this limitation and learn how to gain access to the command line from tests.

## Usage

1. Install dependencies

    ```bash
    npm install
    brew install facebook/fb/idb-companion
    pip3.6 install fb-idb
    ```

2. Install maestro

    ```bash
    curl -Ls "https://get.maestro.mobile.dev" | bash
    ```

3. Run the server

    ```bash
    node server.js &
    ```

4. Run the sample test

    ```bash
    udid=`idb list-targets --only simulator --json | jq 'select(.name=="iPhone 14")' | jq -r '.udid'`
    app_id="com.apple.Preferences" # This is a Settings app, just as an example
    xcrun simctl bootstatus ${udid} -b
    maestro --udid ${udid} test --env app_id=${app_id} test.yaml
    ```
