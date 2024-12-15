import EditScreenInfo from "@/components/EditScreenInfo";
import { Button, Input, Text, View, XStack, YStack } from "tamagui";
export default function TabOneScreen() {
  return (
    <View f={1} jc="center" ai="center" bg="$gray5">
      <Text fow="bold" fos="$6">
        Tab One
      </Text>
      <YStack m="$4" gap="$8">
      <YStack
        p="$4"
        br="$4"
        bg="$red10"
        $theme-dark={{ bg: "$gray10" }}
      >
        <Text>bg: should be red in light mode, gray in dark mode</Text>
      </YStack>

      <YStack jc="center" ai="center">
        <Text>
          Red Theme Button: should be light red in light mode, dark red in dark mode
        </Text>
        <Button theme="red" onPress={() => {}}>Test</Button>
      </YStack>

      <YStack jc="center" ai="center">
        <Text>
          Input: background should be white in light mode, black in dark mode
        </Text>
        <Input placeholder="Input" w="$10" />
      </YStack>
      </YStack>
    </View>
  );
}
