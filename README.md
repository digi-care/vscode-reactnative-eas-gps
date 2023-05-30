# vscode-react-native-esa

```
npm install --global eas-cli
npx create-expo-app eas-react-native-app
cd eas-react-native-app
eas init --id 990ab604-d68a-4f29-8fa9-57a0306d4ea7
```

https://docs.expo.dev/guides/typescript/#starting-from-scratch-using-a-typescript-template

```
npx create-expo-app -t expo-template-blank-typescript
```

https://dev.to/alexcoding42/how-to-create-production-builds-for-app-store-and-play-store-with-easexpo-and-react-native-491d

```
eas build:configure
```

https://medium.com/@jmatsu.drm/%E6%9C%80%E6%96%B0%E3%81%AE-android-command-line-tools-%E3%81%AE%E3%82%BB%E3%83%83%E3%83%88%E3%82%A2%E3%83%83%E3%83%97-1f99605e6bee

```
export ANDROID_SDK_ROOT="$HOME/sdk"
mkdir -p $ANDROID_SDK_ROOT/cmdline-tools
curl -o sdk-tools.zip "https://dl.google.com/android/repository/commandlinetools-linux-6514223_latest.zip"	
unzip "sdk-tools.zip" -d $ANDROID_SDK_ROOT/cmdline-tools
$ANDROID_SDK_ROOT/cmdline-tools/tools/bin/sdkmanager <package>...
```

```
cd
export ANDROID_SDK_ROOT="/opt/android_sdk"
sudo mkdir -p $ANDROID_SDK_ROOT/cmdline-tools
sudo curl -o android-commandlinetools-linux.zip "https://dl.google.com/android/repository/commandlinetools-linux-9477386_latest.zip"	
sudo unzip "android-commandlinetools-linux.zip" -d $ANDROID_SDK_ROOT
$ANDROID_SDK_ROOT/cmdline-tools/bin/sdkmanager <package>...
```

https://zenn.dev/tadaedo/scraps/6f989f2a104f76


```
export ANDROID_SDK_ROOT="/opt/android_sdk"
cd $ANDROID_SDK_ROOT
sudo ./cmdline-tools/bin/sdkmanager --install "platform-tools" "platforms;android-31" --sdk_root=./
```

```
cd
cd ws
eas build --platform android --profile development --local
```

# vscode-react-native-expo

https://zenn.dev/username/articles/2021-12-25-9b543d55e9ff81afff09

github actions  
https://github.com/expo/expo-github-action/tree/v7

**Example**
``` App.tsx
// App.tsx

import Logo from './Logo';  // logo.svg ==> Logo.tsx
//import './App.css'; // ==> ../index.html

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo className="App-logo" />
        <p>
          Edit <code>src/app/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

```

## インストール

- git
- Docker
- [VS Code](https://code.visualstudio.com/download)
- [Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

## Templateからのリポジトリ作成とPagesの設定

1. GitHubにログインします。
1. GitHubのリポジトリを開きます。  
https://github.com/jp-rad/vscode-react-parcel.git
1. `Use this template` をクリックし、リポジトリを作成します。  
[こちら - https://github.com/jp-rad/vscode-react-parcel/generate](https://github.com/jp-rad/vscode-react-parcel/generate)
1. 作成したGitHubのリポジトリが開くので、`Settings`タブを開き、左のメニューから`Pages`を選択し、`GitHub Pages`設定画面を開きます。
1. `Source`で、`GitHub Actions`を選びます。
1. `GitHub Pages`の作成に失敗していますので、`Actions`タブを開き、失敗している`workflow`(`'Initial commit'`)をクリックし、右上の`Re-run Jobs`ボタンから`Re-run failed jobs`コマンドを選んで、再実行します。
1. Workflowが再実行されますので、正常に完了するのを確認します。

## クローンとVS Codeの起動

1. `git clone <your GitHub Code URL>`
1. git clone したフォルダををVS Codeで開く
1. Dockerを起動する
1. VS Codeで`Reopen in Container`を実行し、Dockerコンテナーを起動する  
（初回、`yarn install`コマンドが自動的に実行され、依存パッケージのダウンロードとインストールが行われるので、完了するまで待ちます）

## VS Codeでの開発

1. VS Codeでソースコードを編集します(`src`フォルダ内)
1. ユニットテストを実行するには、ターミナルを開いて、`yarn test`コマンドを実行します(`packege.json`で定義)
1. ウェブアプリを実行するには、ターミナルを開いて、`yarn start`コマンドを実行し(`packege.json`で定義)、ウェブブラウザで、[http://localhost:1234](http://localhost:1234)を開きます  
（`[Ctrl]+[C]`で終了します）
1. ビルドを実行するには、ターミナルを開いて、`yarn build`コマンドを実行します(`packege.json`で定義)  
（`.build`フォルダ内に生成されます）

## ウェブアプリのデプロイ

1. ソースコードを`main`ブランチにプッシュ（コミット）します。  
`main` ブランチにソースコードをプッシュ（コミット）すると `GitHub Actions` によって、`GitHub Pages`へデプロイされます。
1. GitHubにログインします。
1. GitHubのリポジトリを開きます。
1. `Actions`タブを開き、最新の`workflow`が成功していることを確認します。
1. `Settings`タブを開き、左のメニューから`Pages`を選択し、`GitHub Pages`設定画面を開きます。
1. `Your site is live at`の後に表示されているのが、ウェブアプリの`URL`です。
1. `URL`リンク、もしくは、`Visit site`ボタンで、ウェブアプリを開きます。
