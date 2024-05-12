<script lang="ts" setup>
    import Container from "@/containers/Container.vue";
    import { Logo, Title, Row, Col } from "@/components";
    import { col } from "@/constants/col.constant";
</script>

<template>
    <Container>
        <Logo />
        <Title />
        
        <Row>
            <Col
                v-for="{ id, color, href, min_width, rel, size, target, variant, icon, icon_size, text } in col"
                :key="id"
            >
                <v-btn
                    :color="color"
                    :href="href"
                    :min-width="min_width"
                    :rel="rel"
                    :size="size"
                    :target="target"
                    :variant="variant"
                >
                    <v-icon :icon="icon" :size="icon_size" start />
            
                    {{ text }}
                </v-btn>
            </Col>
        </Row>
    </Container>
</template>
