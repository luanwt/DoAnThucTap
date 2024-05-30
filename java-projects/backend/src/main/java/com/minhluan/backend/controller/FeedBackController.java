package com.minhluan.backend.controller;

import lombok.AllArgsConstructor;

import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import com.minhluan.backend.entity.FeedBack;

import com.minhluan.backend.service.FeedBackService;
import java.util.List;
import org.springframework.http.HttpHeaders;
@RestController
@AllArgsConstructor
@CrossOrigin(origins = {"http://localhost:3000","http://localhost:3001"},exposedHeaders = "Content-Range")
@RequestMapping("api/feedbacks")
public class FeedBackController{
    private FeedBackService FeedBackService;
    // Create FeedBack REST API

@PostMapping

public ResponseEntity<FeedBack> createFeedBack(@RequestBody FeedBack FeedBack) {
FeedBack savedFeedBack = FeedBackService.createFeedback(FeedBack);
return new ResponseEntity<>(savedFeedBack, HttpStatus.CREATED);


}
// Get FeedBack by id REST API

// http://1ocalhost:8080/api/FeedBacks/1

@GetMapping("{id}")

public ResponseEntity<FeedBack> getFeedBackById(@PathVariable("id") Long FeedBackId) {
FeedBack FeedBack = FeedBackService.getFeedbackById(FeedBackId);
return new ResponseEntity<>(FeedBack, HttpStatus.OK);
}
// Get All FeedBacks REST API

// http://1ocalhost:8080/api/FeedBacks

@GetMapping

public ResponseEntity<List<FeedBack>> getAllFeedBacks() {
List<FeedBack> FeedBacks = FeedBackService.getAllFeedbacks();
HttpHeaders headers= new HttpHeaders();
headers.add("Content-Range","items 0-"+FeedBacks.size()+"/" +FeedBacks.size());
return ResponseEntity.ok().headers(headers).body(FeedBacks);


}
// Update FeedBack REST API
@PutMapping("{id}")
// http://localhost:8080/api/FeedBacks/1
public ResponseEntity<FeedBack> updateFeedBack(@PathVariable("id") Long FeedBackId,
@RequestBody FeedBack FeedBack) {
FeedBack.setId(FeedBackId);
FeedBack updatedFeedBack = FeedBackService.updateFeedback(FeedBack);
return new ResponseEntity<>(updatedFeedBack, HttpStatus.OK);
}
// Delete FeedBack REST API

@DeleteMapping("{id}")

public ResponseEntity<String> deleteFeedBack(@PathVariable("id") Long FeedBackId) {
FeedBackService.deleteFeedback(FeedBackId);
return new ResponseEntity<>("FeedBack successfully deleted!", HttpStatus.OK);
}
}