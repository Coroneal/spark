package app.api;

import app.model.Credentials;
import app.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;

@RestController
@RequestMapping("/api/register")
public class RegistrationController {

  @Autowired
  AuthenticationManager authenticationManager;

  @RequestMapping(method = RequestMethod.POST)
  public User register(@RequestBody Credentials credentials, HttpSession httpSession) {
//    Authentication authentication = new UsernamePasswordAuthenticationToken(credentials.getUsername(), credentials.getPassword());
//    SecurityContextHolder.getContext().setAuthentication(authenticationManager.authenticate(authentication));

    User user = new User(credentials.getUsername(), httpSession.getId(), true);
//    httpSession.setAttribute("user", user);
    return user;
  }

}
