import { useRouter } from "expo-router";

export function useNavigationHelpers() {
    const router = useRouter();

    const goToProductInfo = (id) => {
        router.push({
            pathname: "/ProductInfo",
            params: { id }
        })
    }

    return { goToProductInfo }
}