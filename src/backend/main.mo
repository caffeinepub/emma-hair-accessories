import Map "mo:core/Map";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Int "mo:core/Int";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";

actor {
  type Inquiry = {
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module Inquiry {
    public func compare(inquiry1 : Inquiry, inquiry2 : Inquiry) : Order.Order {
      Int.compare(inquiry1.timestamp, inquiry2.timestamp);
    };
  };

  let inquiries = Map.empty<Nat, Inquiry>();
  var nextId = 0;

  public shared ({ caller }) func submitInquiry(name : Text, email : Text, phone : Text, message : Text) : async () {
    let inquiry : Inquiry = {
      name;
      email;
      phone;
      message;
      timestamp = Time.now();
    };

    inquiries.add(nextId, inquiry);
    nextId += 1;
  };

  public query ({ caller }) func getAllInquiries() : async [Inquiry] {
    let inquiryArray = inquiries.values().toArray();
    inquiryArray.sort();
  };

  public query ({ caller }) func getInquiry(id : Nat) : async Inquiry {
    switch (inquiries.get(id)) {
      case (null) { Runtime.trap("Inquiry does not exist") };
      case (?inquiry) { inquiry };
    };
  };
};
