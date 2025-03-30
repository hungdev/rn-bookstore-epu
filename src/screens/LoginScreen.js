import React, {useState} from 'react';
import {SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet, Image, StatusBar} from 'react-native';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('Limpitsouni');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Logo and Illustration */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>R</Text>
        </View>

        <Image
          source={{
            uri: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1721918653l/198902277.jpg',
          }}
          style={styles.illustration}
          resizeMode="contain"
        />
      </View>

      {/* Login Form */}
      <View style={styles.formContainer}>
        <Text style={styles.title}>Sign in</Text>

        {/* Username/Email Field */}
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Username/Email</Text>
          <TextInput style={styles.input} value={username} onChangeText={setUsername} autoCapitalize="none" />
        </View>

        {/* Password Field */}
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput style={styles.input} value={password} onChangeText={setPassword} secureTextEntry />
        </View>

        {/* Remember Me & Forgot Password */}
        <View style={styles.optionsRow}>
          <TouchableOpacity style={styles.rememberContainer} onPress={() => setRememberMe(!rememberMe)}>
            <View style={styles.checkbox}>{rememberMe && <View style={styles.checkboxInner} />}</View>
            <Text style={styles.rememberText}>Remember me</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.forgotText}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.action}>
        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.replace('Main')}>
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>

        {/* Social Login */}
        <View style={styles.socialContainer}>
          <Text style={styles.socialText}>Sign in with</Text>
          <View style={styles.socialButtons}>
            <TouchableOpacity style={[styles.socialButton, styles.twitterButton]}>
              <Text style={styles.socialIcon}>𝕏</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.socialButton, styles.facebookButton]}>
              <Text style={styles.socialIcon}>f</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.socialButton, styles.googleButton]}>
              <Text style={styles.socialIcon}>G</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Sign Up Link */}
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>New user? </Text>
          <TouchableOpacity>
            <Text style={styles.signupLink}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF8FB',
    padding: 20,
  },
  header: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  logoContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4ECDC4',
  },
  illustration: {
    width: '100%',
    height: 150,
  },
  formContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    padding: 24,
    paddingTop: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 24,
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    color: '#9CA3AF',
    marginBottom: 8,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    fontSize: 16,
    paddingVertical: 8,
    color: '#333',
  },
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 10,
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#9CA3AF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  checkboxInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#4ECDC4',
  },
  rememberText: {
    fontSize: 14,
    color: '#6B7280',
  },
  forgotText: {
    fontSize: 14,
    color: '#4ECDC4',
  },
  loginButton: {
    backgroundColor: '#4ECDC4',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 30,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  socialContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  socialText: {
    fontSize: 14,
    color: '#9CA3AF',
    marginBottom: 16,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  twitterButton: {
    backgroundColor: '#55ACEE',
  },
  facebookButton: {
    backgroundColor: '#3B5998',
  },
  googleButton: {
    backgroundColor: '#DD4B39',
  },
  socialIcon: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signupText: {
    fontSize: 14,
    color: '#6B7280',
  },
  signupLink: {
    fontSize: 14,
    color: '#4ECDC4',
    fontWeight: '500',
  },
  action: {
    marginTop: 20,
  },
});

export default LoginScreen;
