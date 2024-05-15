# React Native Orientation

Curently, works on Android and IOS

### 🚀 Installation

```sh
npm install rn-detect-orientation
```

or

```sh
yarn add rn-detect-orientation
```

### 🚀 Usage

```tsx
import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Orientation from 'rn-detect-orientation';

export default function App() {
  const [result, setResult] = useState<number | undefined>();
  const [orient, setOrient] = useState<string>();
  const [isLocked, setLocked] = useState<boolean>(false);
  const [sendValue, setValue] = useState<string | null>(null);

  useEffect(() => {
    Orientation.addOrientationListener(onOrientationDidUpdate);
    return () => {
      Orientation.removeOrientationListener();
    };
  }, []);

  const onOrientationDidUpdate = (event) => {
    setOrient(`${event}`);
  };

  useEffect(() => {
    let initialOrientation = Orientation.getInitialOrientation();
    setOrient(`${initialOrientation}`);
  }, []);

  const checkLocked = () => {
    const locked = Orientation.isLocked();
    if (locked !== isLocked) {
      setLocked(locked);
    }
  };

  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Text>Result: {orient}</Text>
      <Button onPress={() => {
        Orientation.requestEnableOrientations();
        checkLocked();
      }}
              title={'Enable Screen Orientation'}>
      </Button>
      <Button onPress={() => {
        Orientation.requestDisableOrientations();
        checkLocked();
      }}
              title={'Disable Screen Orientation'}>
      </Button>
    </View>
  );
}
```

### 🚀 Event
```
- addOrientationListener: (cb: any) => import("react-native").EmitterSubscription;
- removeOrientationListener: () => void;
```

### 🚀 Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

### 🚀 License
    MIT License
    Copyright (c) 2024 Forest Nguyen
---
