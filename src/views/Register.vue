<template>
	<v-content>
		<v-container fluid fill-height>
			<v-layout align-center justify-center>
				<v-flex xs12 sm8 md4>
					<v-card class="elevation-1">
						<v-card-text>
							<v-form>
								<v-text-field solo prepend-icon="fa-user-circle" name="name" label="Name" type="text"></v-text-field>
								<v-text-field solo prepend-icon="fa-mail-bulk" name="email" label="email" id="email" type="email"></v-text-field>
								<v-text-field solo prepend-icon="fa-key" name="password" label="Password" id="password" type="password"></v-text-field>
								<v-text-field solo prepend-icon="fa-key" name="" label="Verify Password" id="verify_password" type="password"></v-text-field>
							</v-form>
						</v-card-text>
						<v-card-actions>
							<v-spacer></v-spacer>
							<v-btn flat color="primary">Register</v-btn>
						</v-card-actions>
					</v-card>
				</v-flex>
			</v-layout>
		</v-container>
	</v-content>
</template>

<script>
export default {
	data: () => ({
		drawer: null
	}),
	props: {
		source: String
	}
};
</script>